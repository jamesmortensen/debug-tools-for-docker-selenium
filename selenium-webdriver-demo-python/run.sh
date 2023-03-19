#!/usr/bin/env bash

pip3 install virtualenv | grep -v 'Requirement already satisfied'
virtualenv virtenv 
source virtenv/bin/activate

python -m pip install selenium==4.3.0 \
                      | grep -v 'Requirement already satisfied'

python remote-demo.py $@
ret_code=$?

deactivate

exit $ret_code
