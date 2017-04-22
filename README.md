# edil3ra.github.io

# Global Depedencies
	sudo apt-get install pandoc
	sudo apt-get install texlive-xetex

# Command to generate the cv
## pdf
   pandoc ./pages/cv.org -f org -t latex -o ./themes/lanyon/assets/files/cv.pdf --latex-engine=xelatex
