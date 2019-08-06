import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import ActionItem from "./ActionItem";

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

  @media (min-width: 992px) {
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

const TableBody = styled.tbody`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 80%;
  }
`;

const Table = styled.table`
  display: flex;
  border-collapse: collapse;
  width: 100%;
`;

const Button = styled.button`
  width: 50%;
  height: auto;
  margin: 20px auto;
`;

const ActionItems = ({ members }) => {
  const [modal, setModal] = useState(false);

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <Row>
            <HeadCell>Date</HeadCell>
            <HeadCell>Author</HeadCell>
            <HeadCell>Assigned To</HeadCell>
            <HeadCell>Info</HeadCell>
            <HeadCell>Complete?</HeadCell>
          </Row>
          <Row onClick={() => setModal(!modal)}>
            <Cell>2/2/18</Cell>
            <Cell>Mo</Cell>
            <Cell>Matt</Cell>
            <Cell>Test 1</Cell>
            <Cell>No</Cell>
          </Row>
          <Row onClick={() => setModal(!modal)}>
            <Cell>2/9/18</Cell>
            <Cell>Justin</Cell>
            <Cell>Paul</Cell>
            <Cell>Test 2</Cell>
            <Cell>Yes</Cell>
          </Row>
          <Row onClick={() => setModal(!modal)}>
            <Cell>3/2/19</Cell>
            <Cell>Ryan</Cell>
            <Cell>Laerte</Cell>
            <Cell>Test 3</Cell>
            <Cell>No</Cell>
          </Row>
        </TableBody>
      </Table>
      <Button onClick={() => setModal(!modal)}>Add New Action Item...</Button>

      {modal && <ActionItem members={members} />}
    </TableContainer>
  );
};

export default ActionItems;
