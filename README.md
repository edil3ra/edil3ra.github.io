# Global Depedencies
	
	
# deploy
	nikola github_deploy	

# copy games
	svn export https://github.com/edil3ra/pong/trunk/public games/pong --force
	svn export https://github.com/edil3ra/life/trunk/public games/life --force
	svn export https://github.com/edil3ra/spherebreak/trunk/public games/spherebreak --force
	svn export https://github.com/edil3ra/spherebreak/trunk/public --force


# cv
    pandoc /home/vince/blog/pages/cv.org -f org -t rst -o ~/tmp/cv.rst
    https://convertfiles.online/convert/rst/odt
    https://convertfiles.online/convert/rst/docx
    https://convertfiles.online/convert/rst/pdf
