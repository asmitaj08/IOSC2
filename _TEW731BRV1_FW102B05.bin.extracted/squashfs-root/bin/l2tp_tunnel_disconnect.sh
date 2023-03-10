#!/bin/sh
echo "l2tp tunnel down">/dev/console
app_sync 1029 0 "act=down"
