#/bin/bash

if [ $# != 1 ] ; then
	echo -e "Usage: ./startManager.sh <BOT TOKEN>"
	exit 1
fi

cd "$(dirname "$0")"/bot
npm start $1