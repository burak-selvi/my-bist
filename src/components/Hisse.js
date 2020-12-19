import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core';
import Loading from './Loading';
import * as moment from 'moment';

export default function Hisse({ history }) {
  const { code } = useParams();
  const [hisse, setHisse] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://cors-anywhere.herokuapp.com/https://bigpara.hurriyet.com.tr/api/v1/borsa/hisseyuzeysel/${code}`;
    Axios.get(url)
      .then(response => {
        setLoading(false);
        setHisse(response.data.data.hisseYuzeysel);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, [code]);

  return (
    <React.Fragment>
      {isLoading ? <Loading /> :
        <Box>
          <Button variant="contained" color="primary" onClick={() => history.goBack()}>
            Geri
          </Button>
          <Typography variant="h3" style={{ marginTop: '3rem' }}>
            {hisse?.aciklama} - {hisse?.sembol}
          </Typography>
          <Typography variant="subtitle1">
            ALIŞ: {hisse?.alis}
          </Typography>
          <Typography variant="subtitle1">
            SATIŞ: {hisse?.satis}
          </Typography>
          <Typography variant="subtitle1">
            ÖZ SERMAYE: {hisse?.ozsermaye}
          </Typography>
          <Typography variant="subtitle1">
            PİYASA DEĞERİ: {hisse?.piydeg}
          </Typography>
          <Typography variant="subtitle1">
          </Typography>
        </Box>
      }
    </React.Fragment>
  )
}
