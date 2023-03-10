#!/bin/sh
echo "l2tp tunnel up">/dev/console
app_sync 1029 0 "act=up"
