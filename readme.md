# Web scraping project

In this project, I have/will scraped through popular social media websites.
Find the below list :

## Instagram

1. Signin/Login: **Done**
2. Search for user: **Done**
3. Download reels(same can be achieved for image posts): **Photo pending**
4. Upload (currently facing some issue as it doesn't process the upload completely):**WIP**
5. Fetch details(no. of posts,reels,follower,following,bio): **Future scope**
6. Search by tagged people by the user: **Future scope**
7. Search tags: **Future scope**
8. Like,comment over posts/tags: **Future scope**
9. Random comment selector over a post or date-time interval(clean comments/infavour): **Future scope**

## Youtube

1. Sign-in/Login:**Done**
2. Upload video(with title,tags,publish time etc)**Done**
3. Download any video(Future scope)
4. Short (is this possible over web-browser ?)--Yes use the tag #shorts in the title: **Done**
5. Added a merge video script, that would merge the provided set of video's to single as per the location provided in array: **Done**
6. Youtube surfing a single channel's video for given time at 2x speed: **Done**

## twitter (Future scope)

1. Search #tags
2. Search user, copy post

# Blog

## 1 . Youtube login?

Google login prevented by puppeteer, now checking with puppeteer puppeteer-extra and puppeteer-extra-plugin-stealth.

## 2. Creating loop for the video dump

    while(file!empty)
    Fetch latest file=> yt upload => delete file

## 3. Instagram uploadFile to working ?

1. Issue only with the .mp4 format ? --unable to upload video (keeps loading for a while)

2. images upload is working fine.

3. increased time delay, but works quick when selected via physical actions: still not loading forward

4. mentioned : image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime

## 4. Youtube 24hr constraint and few video upload only

Thought of adding new Odysee for upload as youtube has 24hrs constraint
Will setup the page similar to youtube , it also makes sense not to delete if going to upload on multiple platform

## 5. Youtube surfing
