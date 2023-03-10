#!/bin/sh
echo "l2tp demand on">/dev/console
killall pppd
echo "c client">/var/run/l2tp-control

