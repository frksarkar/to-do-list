function addElement<T extends HTMLElement>(selector: string): T {
	const element = document.querySelector<T>(selector);

	if (!element) {
		throw new Error(`Cannot find element with selector ${selector}`);
	}
	return element;
}

function addElements<T extends HTMLElement>(selector: string): NodeListOf<T> {
	const element = document.querySelectorAll<T>(selector);

	if (!element) {
		throw new Error(`Cannot find element with selector ${selector}`);
	}
	return element;
}

const selectedElement = initializeSelectedElement();

function initializeSelectedElement() {
	return {
		addTaskBtn: addElement<HTMLButtonElement>('.add_task_btn'),
		inputText: addElement<HTMLInputElement>('#input_text'),
		inCompleteTaskContainer: addElement('.incomplete_task'),
		completeTaskContainer: addElement('.complete_task'),
		taskRemoveBtn: addElements<HTMLButtonElement>('.remove-btn'),
		taskDeleteBtn: addElements<HTMLButtonElement>('.delete'),
		completedTaskBtn: addElements<HTMLInputElement>('input[type=checkbox]'),
	};
}

function createElement<T extends HTMLElement>(
	elementName: string,
	className?: string,
	type?: string,
	value?: string,
	click?: () => void
): T {
	const element = document.createElement(elementName) as T;
	element.className = className || '';

	if (click) {
		element.addEventListener('click', click);
	}

	if (element instanceof HTMLInputElement) {
		element.type = type || '';
		element.value = value || '';
	}

	return element;
}

function createCheckbox(onClick: () => void): HTMLInputElement {
	return createElement<HTMLInputElement>(
		'input',
		'',
		'checkbox',
		'',
		onClick
	);
}

function createLabel(text: string): HTMLLabelElement {
	const label = createElement<HTMLLabelElement>('label', 'label');
	label.innerText = text;
	return label;
}

function createRemoveButton(onClick: () => void): HTMLInputElement {
	return createElement<HTMLInputElement>(
		'input',
		'remove-btn',
		'button',
		'Remove',
		onClick
	);
}

function createElementWithText(): HTMLDivElement {
	const container = createElement<HTMLDivElement>('div');
	const checkbox = createCheckbox(addTaskComplete);
	const label = createLabel(selectedElement.inputText.value);
	const removeBtn = createRemoveButton(remove);

	container.append(checkbox, label, removeBtn);
	return container;
}

function addTask() {
	const inputValue = selectedElement.inputText.value.trim();
	if (!inputValue) {
		alert('Please enter a task.');
		return;
	}

	const element = createElementWithText();
	selectedElement.inCompleteTaskContainer.appendChild(element);
	selectedElement.inputText.value = '';
}

function addTaskComplete(this: HTMLInputElement) {
	const task = this.nextElementSibling as HTMLInputElement;
	if (task) {
		task.style.textDecoration = 'line-through';
		const element = createElement('div');
		const deleteBtn = createElement(
			'input',
			'delete',
			'button',
			'Delete',
			remove
		);
		element.append(task, deleteBtn);
		this.parentElement?.remove();
		selectedElement.completeTaskContainer.appendChild(element);
	}
}

function remove(this: any) {
	this.parentElement.remove();
}

selectedElement.addTaskBtn?.addEventListener('click', addTask);

selectedElement.taskRemoveBtn.forEach((btn) =>
	btn.addEventListener('click', remove)
);
selectedElement.completedTaskBtn.forEach((btn) =>
	btn.addEventListener('click', addTaskComplete)
);
selectedElement.taskDeleteBtn.forEach((btn) =>
	btn.addEventListener('click', remove)
);
