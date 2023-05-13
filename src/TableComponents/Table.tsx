import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import ReactPaginate from "react-paginate";
import "./Table.css";
import EditModal from "./EditModal";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const usersPerPage = 5;
  const pagesVisited: number = currentPage * usersPerPage;

  const displayUsers: any[] = users.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  const pageCount: number = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Website", accessor: "website" },
      {
        Header: "Actions",
        Cell: ({ row }: { row: any }) => (
          <div>
            <button
              className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
              onClick={() => handleEdit(row)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded"
              onClick={() => handleDelete(row)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: displayUsers });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleEdit = (row: any) => {
    // Handle edit action for the row
    setIsModalOpen(true);
    setSelectedUserId(row.original.id);
  };

  const handleDelete = (row: any) => {
    // Handle delete action for the row
    console.log("Delete:", row.original);
  };

  return (
    <>
      <table {...getTableProps()} className="table w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination flex justify-center space-x-4"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="pagination__link--active"
      />
      <EditModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUserId(null);
        }}
        userId={selectedUserId}
      />
    </>
  );
};

export default UserTable;
