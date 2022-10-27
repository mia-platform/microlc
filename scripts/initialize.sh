#!/bin/bash

GREEN="\e[1;32m"
ENDCOLOR="\e[0m"

printf "\n${GREEN}\tINITIALIZE${ENDCOLOR}"
echo -e "\n"

printf "\n\t\xf0\x9f\x97\x91${GREEN}\tcleanup${ENDCOLOR}"
echo -e "\n"
yarn cleanup

printf "\n\t\xe2\x9a\x99${GREEN}\tinterfaces${ENDCOLOR}"
echo -e "\n"
yarn i build

printf "\n\t\xf0\x9f\x96\xbc${GREEN}\ticonic${ENDCOLOR}"
echo -e "\n"
yarn c build

printf "\n\t\xf0\x9f\x8e\x82${GREEN}\tcomposer${ENDCOLOR}"
echo -e "\n"
yarn m build

printf "\n\t\xf0\x9f\x8e\xba${GREEN}\torchestrator${ENDCOLOR}"
echo -e "\n"
yarn o build

printf "\n\t\xe2\x9c\xa8${GREEN}\tlayout${ENDCOLOR}"
echo -e "\n"
yarn l build
