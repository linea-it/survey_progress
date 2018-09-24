
--- Exposicoes
SELECT * FROM DES_ADMIN.Y3A1_EXPOSURE WHERE RADEG BETWEEN 19 AND 25 and DECDEG BETWEEN 2 and 4 and ROWNUM <= 5;

-- Exposicoes Resumido
SELECT date_obs, nite,expnum, band, radeg, decdeg, filename, filetype, exptime, airmass, humidity, pressure FROM DES_ADMIN.Y3A1_EXPOSURE WHERE RADEG BETWEEN 19 AND 25 and DECDEG BETWEEN 2 and 4 and ROWNUM <= 5;

--- CCDs
SELECT pfw_attempt_id, nite, expnum, ccdnum, band, exptime, crossra0, racmin, 
racmax, deccmin, deccmax, ra_cent, dec_cent, rac1, rac2, rac3, rac4, 
decc1, decc2, decc3, decc4, filename
FROM DES_ADMIN.Y3A1_IMAGE 
WHERE expnum in (
    SELECT expnum FROM DES_ADMIN.Y3A1_EXPOSURE WHERE RADEG BETWEEN 19 AND 25 and DECDEG BETWEEN 2 and 4 and ROWNUM <= 5) 
and filetype = 'red_immask'
order by expnum, ccdnum;
