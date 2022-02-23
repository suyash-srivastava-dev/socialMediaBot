!/bin/bash  
echo "Installing dependencies"  
# npm install
echo "Downloading latest files from IG"  
# node index.js
echo "Changing directory to components"
cd components
echo "Formating files"  
node resizeAndRemove.js
echo "Merging them together"
node mergedVideoOutput.js
echo "Upload Video to YT"
node ytUploadMerged.js
echo "Uploading shorts"
cd ..
node ytUpload.js
echo "Done Uploading"
