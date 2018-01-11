# install the node modules
after you downloaded the zip file and unzipped it or you did the 'git clone', simply run:
* $ _npm install_ 
* $ _node server.js_

# Run the test (local)
* to show ALL the posts in the database: **$** _curl http://localhost:3000/showPosts_
* to show one single post by it's id (if it exists), the example will show post_id = 2: **$** _curl http://localhost:3000/showPosts/2_
* to add a new post, use the file 'new_entry.json': **$** _curl -H "Content-type: application/json" -X POST http://localhost:3000/addPost --data @new_entry.json_
* **NOTE** if you don't have to file new_entry.json, run the post with data from the command line: **$** _curl -H "Content-type: application/json" -X POST http://ec2-52-27-248-102.us-west-2.compute.amazonaws.com:3000/addPost --data '[{"title":"title1","body":"new body"}]'_

check out this challange writen in python: https://github.com/pauldenijs/nwea_python





