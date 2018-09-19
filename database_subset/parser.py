

import csv
import json
new = list()

fields= ["pfw_attempt_id","nite","expnum","ccdnum","band","exptime","crossra0","racmin","racmax","deccmin","deccmax","ra_cent","dec_cent","rac1","rac2","rac3","rac4","decc1","decc2","decc3","decc4","filename", "path", "downloaded"]

with open('exposure.dsv', 'r') as f:
    reader = csv.DictReader(f, delimiter="|", fieldnames=fields )
    id = 100
    for row in reader:
        row.update({
            'id': id, 
            'ccdnum': int(row['ccdnum'].strip()),
            'filename': row['filename'].strip(),
            'ra_cent': float(row['ra_cent'].strip()),
            'decc4': float(row['decc4'].strip()),
            'decc2': float(row['decc4'].strip()),
            'band': row['band'].strip(),
            'rac1': float(row['rac1'].strip()),
            'dec_cent': float(row['dec_cent'].strip()),
            'deccmax': float(row['deccmax'].strip()),
            'deccmin': float(row['deccmin'].strip()),
            'crossra0': row['crossra0'].strip(),
            'racmin': float(row['racmin'].strip()),
            'decc3': float(row['decc3'].strip()),
            'racmax': float(row['racmax'].strip()),
            'rac4': float(row['rac4'].strip()),
            'pfw_attempt_id': int(row['pfw_attempt_id'].strip()),
            'expnum': int(row['expnum'].strip()),
            'exptime': float(row['exptime'].strip()),
            'decc1': float(row['decc1'].strip()),
            'rac2': float(row['rac2'].strip()),
            'nite': row['nite'].strip(),
            'rac3': float(row['rac3'].strip()),
            'path': "/archive/images",
            'downloaded': False,
        })

        new.append(row)
        id += 1

f.close()

# print(new[0])
with open("new.csv", 'w') as f:
    fields = ["id"] + fields
    writer = csv.DictWriter(f, fieldnames=fields, delimiter=';')
    writer.writeheader()
    for r in new:
        writer.writerow(r)


j = json.dumps(new[0])

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