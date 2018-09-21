

import csv
import json
new = list()

# QUERY
# SELECT pfw_attempt_id, nite, expnum, ccdnum, band, exptime, crossra0, racmin, racmax, deccmin, deccmax, ra_cent, dec_cent, rac1, rac2, rac3, rac4, decc1, decc2, decc3, decc4, filename FROM DES_ADMIN.Y3A1_IMAGE WHERE expnum = 516013 AND filename LIKE '%bkg.fits' AND nite IS NOT NULL ORDER BY CCDNUM;

r_fields= ["pfw_attempt_id", "nite", "expnum", "ccdnum", "band", "exptime", "crossra0", "racmin", "racmax", "deccmin", "deccmax", "ra_cent", "dec_cent", "rac1", "rac2", "rac3", "rac4", "decc1", "decc2", "decc3", "decc4", "filename"]
w_fields=["id","pfw_attempt_id", "nite", "expnum", "ccdnum", "band", "exptime", "crossra0", "racmin", "racmax", "deccmin", "deccmax", "ra_cent", "dec_cent", "rac1", "rac2", "rac3", "rac4", "decc1", "decc2", "decc3", "decc4", "path", "filename", "downloaded"]

with open('exposure.csv', 'r') as f:
    reader = csv.DictReader(f, delimiter="|", fieldnames=r_fields)
    id = 200
    for row in reader:
        row.update({
            'id': id, 
            'pfw_attempt_id': int(row['pfw_attempt_id'].strip("\xef\xbb\xbf")),            
            'nite': row['nite'].strip(),
            'expnum': int(row['expnum'].strip()),            
            'ccdnum': int(row['ccdnum'].strip()),           
            'band': row['band'].strip(),         
            'exptime': float(row['exptime'].strip()),   
            'crossra0': row['crossra0'].strip(),
            'racmin': float(row['racmin'].strip()),
            'racmax': float(row['racmax'].strip()),
            'deccmin': float(row['deccmin'].strip()),
            'deccmax': float(row['deccmax'].strip()),
            'ra_cent': float(row['ra_cent'].strip()),
            'dec_cent': float(row['dec_cent'].strip()),
            'rac1': float(row['rac1'].strip()),
            'rac2': float(row['rac2'].strip()),
            'rac3': float(row['rac3'].strip()),
            'rac4': float(row['rac4'].strip()),
            'decc1': float(row['decc1'].strip()),
            'decc2': float(row['decc2'].strip()),
            'decc3': float(row['decc3'].strip()),            
            'decc4': float(row['decc4'].strip()),
            'filename': row['filename'].strip(),
            'path': "/archive/images",
            'downloaded': False,
        })

        new.append(row)
        id += 1

f.close()

print(new[0])
with open("new2.csv", 'w') as f:
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