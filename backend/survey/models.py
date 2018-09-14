from django.db import models

class Exposure(models.Model):
    pfw_attempt_id = models.BigIntegerField(
        verbose_name='Image Id', help_text='Unique identifier for each image (1 image is composed by 62 CCDs)')

    nite = models.DateField(
        verbose_name="Night", help_text='Night at which the observation was made.'
    )

    expnum = models.BigIntegerField(
        verbose_name='Exposure',
        help_text='Unique identifier for each image, same function as pfw_attenp_id (it also recorded in the file name)'
    )
    ccdnum = models.IntegerField(
        verbose_name='CCD', help_text='CCD Number (1, 2, ..., 62)'
    )

    band = models.CharField(
        max_length=1,
        verbose_name='Filter', help_text='Filter used to do the observation (u, g, r, i, z, Y).',
        choices=(('u', 'u'), ('g', 'g'), ('r', 'r'), ('i', 'i'), ('z', 'z'), ('Y', 'Y'))
    )

    exptime = models.FloatField(
        verbose_name='Exposure time', help_text='Exposure time of observation.'
    )

    crossra0 = models.BooleanField(
        default=False, verbose_name='Cross RA 0'
    )

    racmin = models.FloatField(
        verbose_name='racmin', help_text='Minimal and maximum right ascension respectively of the CCD cover.'
    )

    racmax = models.FloatField(
        verbose_name='racmax', help_text='Minimal and maximum right ascension respectively of the CCD cover.'
    )

    deccmin = models.FloatField(
        verbose_name='deccmin', help_text='Minimum and maximum declination respectively of the CCD cover.'
    )

    deccmax = models.FloatField(
        verbose_name='deccmax', help_text='Minimum and maximum declination respectively of the CCD cover.'
    )

    ra_cent = models.FloatField(
        verbose_name='ra_cent', help_text='Right ascension of the CCD center'
    )

    dec_cent = models.FloatField(
        verbose_name='dec_cent', help_text='Declination of the CCD center'
    )

    rac1 = models.FloatField(
        verbose_name='rac1', help_text='CCD Corner Coordinates 1 - upper left.'
    )

    rac2 = models.FloatField(
        verbose_name='rac2', help_text='CCD Corner Coordinates 2 - lower left.'
    )

    rac3 = models.FloatField(
        verbose_name='rac3', help_text='CCD Corner Coordinates 3 - lower right.'
    )

    rac4 = models.FloatField(
        verbose_name='rac4', help_text='CCD Corner Coordinates 4 - upper right).'
    )

    decc1 = models.FloatField(
        verbose_name='decc1', help_text='CCD Corner Coordinates 1 - upper left.'
    )

    decc2 = models.FloatField(
        verbose_name='decc2', help_text='CCD Corner Coordinates 2 - lower left.'
    )

    decc3 = models.FloatField(
        verbose_name='decc3', help_text='CCD Corner Coordinates 3 - lower right.'
    )

    decc4 = models.FloatField(
        verbose_name='decc4', help_text='CCD Corner Coordinates 4 - upper right).'
    )


    path = models.TextField(
        verbose_name='Path', help_text='Path in the DES database where the image is stored.'
    )

    filename = models.CharField(
        max_length=256,
        verbose_name='Filename', help_text='Name of FITS file with a CCD image.'
    )

    downloaded = models.BooleanField(
        default=False, verbose_name='Downloaded', help_text='flag indicating whether the image was downloaded from DES.'
    )

    class Meta:
        indexes = [
            models.Index(fields=['expnum']),
            models.Index(fields=['expnum', 'ccdnum']),
            models.Index(fields=['expnum', 'ccdnum', 'band']),
            models.Index(fields=['nite']),
            models.Index(fields=['rac1']),
            models.Index(fields=['rac2']),
            models.Index(fields=['rac3']),
            models.Index(fields=['rac4']),
            models.Index(fields=['decc1']),
            models.Index(fields=['decc2']),
            models.Index(fields=['decc3']),
            models.Index(fields=['decc4']),
        ]

    def __str__(self):
        return str(self.id)