CNAME="wikispeech"
if docker container inspect $CNAME &> /dev/null ; then
    echo -n "STOPPING CONTAINER "
    docker stop $CNAME
    echo -n "DELETING CONTAINER "
    docker rm $CNAME
fi

NETWORKARGS="--network=wikispeech"
docker run --name=$CNAME $NETWORKARGS -p 10000:10000 -v /home/hanna/git_repos/wikispeech_mockup/wikispeech_server/:/config/ -it wikispeech $*

## TODO: SNYGGARE MAPPNING AV CONFIGFILER


