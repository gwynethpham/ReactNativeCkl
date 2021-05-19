rm -rf node_modules
echo "Remove node_modules"
yarn
echo "install success!"

git pull orgin

git checkout -b develop

yarn
echo "Checkout develop"

git merge origin circleci-project-setup

echo "MERGE SUCCESS!!"