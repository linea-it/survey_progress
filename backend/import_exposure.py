from survey.models import Exposure

r_fields=["id","date_obs","nite","expnum","band","radeg","decdeg","filename","filetype","exptime","airmass","humidity","pressure"]

with open('/data/exposure_5.csv', 'r') as f:
    reader = csv.DictReader(f, delimiter=";", fieldnames=r_fields)

    for row in reader:
        print(row)