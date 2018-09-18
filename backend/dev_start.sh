
docker run -it --rm --name survey_progress_backend \
    --publish 8081:8081 \
    --volume $PWD/:/app \
    --volume $PWD/../log/:/log \
    --volume $PWD/../archive/:/archive \
    --env-file $PWD/../.env \
    --network surveyprogress_survey \
    survey_progress_backend

