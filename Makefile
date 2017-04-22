ENVIRONMENT := _env/


$(ENVIRONMENT):
	python3.6 -m venv "$@"

default: help


clean:
	rm -rf "$(ENVIRONMENT)"

setup:
	@echo "make $(ENVIRONMENT);"
	@echo "source $(ENVIRONMENT)bin/activate;"
	@echo "pip install --upgrade pip 'Nikola[extras]';"
	@echo "pip install jedi rope flake8 importmagic yapf;"
	@echo "pip install pypandoc;"
help:
	@echo "To setup Nikola environment, please use 'eval \$$(make setup)'."
up:
	@echo "source _env/bin/activate"
