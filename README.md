# S3-Uploader-Electron-React-Node
S3 uploader developed in electron, react and nodejs

Upload files to Amazon s3 bucket

Create a web application, that allows user to perform below functions

User Registration 
FirstName - Required, allow only strings
LastName - Required, allow only strings
Username - Required, allow only strings
Password - Required, allow 6 characters
On successful registration, update BE database and FE database. Also create a folder( with username) in s3 bucket.

After successful Login, Show s3 DashBoard with grid.


1) Upload image and document files into amazon s3 bucket.
2) Show a list of uploaded files on a grid with most recent ones on top.
3) Grid column are 
FileName (Show filename along with image thumbnail). if the file type is document, then show a document icon
FileType
FileSize in KB/MB
UploadedOn
Actions (Upload a new file, Delete and Download)
4) Sort the columns of the grid (Sortable columns are Filename, Filesize and Uploaded on)
5) For every file, user can perform below actions
Upload a new file and replace the existing file with the same name.   
Delete
Download
6) On clicking on image in grid, show a popup with below information
FileName
FileType
FileSize
Uploaded On
S3 URL
Local URL
Connectivity (ONLINE OR OFFLINE)
7) Pagination for grid
8) 1 click to upload 50 images (Create a folder with 50 images in your FE application)
9) Offline functionality (If there is no internet, app still needs to run without any breakages)
10) Sync (Once the internet is available, all the operations performed in the local database need to be performed on S3 bucket. For ex. In Offline mode, I deleted a file and uploaded a new file. So in Online mode, after i click on "Sync" button, delete and upload new files operations need to be performed on s3 bucket

FE - React
FE database - Sequelizejs

BE - Nodejs
BE database - Postgre

<iframe width="560" height="315" src="https://www.youtube.com/embed/A-tIDlFq5wQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


