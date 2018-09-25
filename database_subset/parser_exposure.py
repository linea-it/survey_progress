

import csv
import json
new = list()

# QUERY
# SELECT pfw_attempt_id, nite, expnum, ccdnum, band, exptime, crossra0, racmin, racmax, deccmin, deccmax, ra_cent, dec_cent, rac1, rac2, rac3, rac4, decc1, decc2, decc3, decc4, filename FROM DES_ADMIN.Y3A1_IMAGE WHERE expnum = 516013 AND filename LIKE '%bkg.fits' AND nite IS NOT NULL ORDER BY CCDNUM,

r_fields= ["date_obs","nite","expnum","band","radeg","decdeg","filename","filetype","exptime","airmass","humidity","pressure"]
w_fields=['id', 'date_obs', 'nite', 'expnum', 'band', 'radeg', 'decdeg', 'filename', 'filetype', 'exptime', 'airmass', 'humidity', 'pressure',]


with open('exposure_5_resumido.dsv', 'r') as f:
    reader = csv.DictReader(f, delimiter=";", fieldnames=r_fields)
    id = 200
    for row in reader:
        row.update({
            'id': id, 
            'date_obs': row['date_obs'].strip(),            
            'nite': row['nite'].strip(),
            'expnum': int(row['expnum'].strip()),            
            'band': row['band'].strip(),         
            'exptime': float(row['exptime'].strip()),   
            'radeg': float(row['radeg'].strip()),
            'decdeg': float(row['decdeg'].strip()),
            'filename': row['filename'].strip(),
            'filetype': row['filetype'].strip(),
            'exptime': float(row['exptime'].strip()),
            'airmass': float(row['airmass'].strip()),
            'humidity': float(row['humidity'].strip()),
            'pressure': float(row['pressure'].strip()),
        })

        new.append(row)
        id += 1

f.close()

print(new[0])
with open("exposure_5.csv", 'w') as f:
    writer = csv.DictWriter(f, fieldnames=w_fields, delimiter=';')
    writer.writeheader()
    for r in new:
        writer.writerow(r)


# j = json.dumps(new[0])

# import requests
# from requests.auth import HTTPBasicAuth
# for row in j:
#     try:
#         headers = {'Content-type': 'application/json', 'Accept': 'application/json', ''}
#         r = requests.put('http://localhost:8081/api/exposure/', data=row, headers=headers, auth=HTTPBasicAuth('gverde', 'adminadmin'))
#         r.status_code
#         print(r.status_code)
#     except Exception as e:
#         print(e)
# with open('exposure.json', 'w') as f:
#      json.dump(new, f)