import React, { useCallback, useEffect, useState } from "react";
import { useUserContext } from "@/hooks/auth";
import classes from "./dashboard.module.sass";
import { FaUserCog } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { set } from "react-hook-form";

const DashBoard = () => {
  const user = useUserContext();
  const [data, setData] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // New state variables to manage download status
  const [downloadStatus, setDownloadStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.info?.userid) return;

    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/dashboard?userid=${user?.info?.userid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const result = await response.json();
        setData(result.data);
        setFilteredData(result.data);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      }
    };

    fetchProjects();
  }, [user]);

  const filter = useCallback((e: any) => {
    if (!data) return;

    const filtered = data.filter((row: any) =>
      Object.values(row).some((value: any) => typeof value === 'string' && value.toLowerCase().includes(e.target.value.toLowerCase()))
    );

    setFilteredData(filtered);
  }, [user, data]);

  const onDownload = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>, project: string) => {
    // Start by setting the download status to "Downloading..."
    setDownloadStatus('Downloading...');

    try {
      const response = await fetch(`/api/download-results-zip?username=${user?.info?.firstname} ${user?.info?.lastname}&project=${project}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to download file');
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'results.zip';
      link.click();
      link.remove();

      // Set the status to "Download successful!" after the download is complete
      setDownloadStatus(`Project "${project}" has been successfully downloaded!`);

      // Reset the download status after a short delay
      setTimeout(() => {
        setDownloadStatus(null);
      }, 3000);  // Reset status after 2 seconds
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('Failed to download the file. Please try again.');
    }
  }, [user]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.userSection}>
        <div>
          <FaUserCog size={30} />
        </div>
        <div>Use Name: {user?.info?.firstname} {user?.info?.lastname}</div>
        <div>Email: {user?.info?.email}</div>
      </div>

      <div className={classes.searchSection}>
        <FcSearch size={20} />
        <input
          type="text"
          placeholder="Search Keyword"
          onChange={(e) => {
            filter(e);
          }}
        />
      </div>

      {downloadStatus && (
        <div className={classes.downloadStatus}>
          {downloadStatus}
        </div>
      )}

      <table className={classes.tableInfo}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Status</th>
            <th>Submission Date</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((row: any, idx: number) => (
            <tr key={idx}>
              <td>{row.project}</td>
              <td>{row.status}</td>
              <td>{row.timestamp}</td>
              <td>
                {row.status === 'done' && (
                  <a onClick={(e) => onDownload(e, row.project)}>Download</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;