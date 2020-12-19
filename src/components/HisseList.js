import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function HisseList() {
  const [hisseler, setHisseler] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = 'https://cors-anywhere.herokuapp.com/https://bigpara.hurriyet.com.tr/api/v1/hisse/list';
    Axios.get(url)
      .then(response => {
        setLoading(false);
        setHisseler(response.data.data);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      {isLoading ? <Loading /> :
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Kod</TableCell>
                <TableCell >Ad</TableCell>
                <TableCell >*</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hisseler.map(row => (
                <TableRow key={row.id}>
                  <TableCell >{row.kod}</TableCell>
                  <TableCell >{row.ad}</TableCell>
                  <TableCell>
                    <Link to={`hisse/${row.kod}`}>
                      Detay
                </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
    </React.Fragment>
  )
}
