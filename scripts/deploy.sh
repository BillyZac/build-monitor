if [ $1 ]
then
  echo "Deploying with Zeit Now..."
  now --token $1 --docker --public
else
  echo "Please supply a Zeit Now token as the first argument to the script."
fi
