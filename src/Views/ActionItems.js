import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import { Modal } from "../helpers";

const TableContainer = styled(Container)`
  padding: 20px 0;
  align-items: center;
  width: 100%;
  margin: 0;
`;

const Row = styled.tr`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-content: center;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: lightgray;
  }
`;

const Cell = styled.td`
  width: 100%;
  border: 1px solid darkgray;
  font-size: 12px;

  @media (min-width: 917px) {
    font-size: 16px;
    text-align: center;
  }
`;

const HeadCell = styled(Cell)`
  text-align: center;
  vertical-align: middle;
  color: gray;
  background-color: lightgreen;
  flex-wrap: nowrap;
  font-weight: bold;
`;

const Table = styled.table`
  display: flex;
  border-collapse: collapse;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 917px) {
    width: 80%;
  }
`;

const ActionItems = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    return () => {
      setModal(modal);

      if (modal) {
        Modal();
      }
    };
  });

  return (
    <TableContainer>
      <Table>
        <Row>
          <HeadCell>Date</HeadCell>
          <HeadCell>Author</HeadCell>
          <HeadCell>Assigned To</HeadCell>
          <HeadCell>Info</HeadCell>
          <HeadCell>Complete?</HeadCell>
        </Row>
        <Row onClick={() => setModal(true)}>
          <Cell>2/2/18</Cell>
          <Cell>Mo</Cell>
          <Cell>Matt</Cell>
          <Cell>Test 1</Cell>
          <Cell>No</Cell>
        </Row>
        <Row>
          <Cell>2/9/18</Cell>
          <Cell>Justin</Cell>
          <Cell>Paul</Cell>
          <Cell>Test 2</Cell>
          <Cell>Yes</Cell>
        </Row>
        <Row>
          <Cell>3/2/19</Cell>
          <Cell>Ryan</Cell>
          <Cell>Laerte</Cell>
          <Cell>Test 3</Cell>
          <Cell>No</Cell>
        </Row>
      </Table>
    </TableContainer>
  );
};

export default ActionItems;
