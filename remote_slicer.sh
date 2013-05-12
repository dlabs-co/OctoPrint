#!/bin/bash
# This script slices in remote a file; Usage: $0 <filename> <remote_ssh>
filename=$(mktemp) ; cat $1| ssh $2 "cat /dev/stdin > $filename; python /opt/skeinforge/skeinforge_application/skeinforge_utilities/skeinforge_craft.py $filename &>/dev/null; cat ${filename}_export.gcode && rm ${filename}* &>/dev/null "
