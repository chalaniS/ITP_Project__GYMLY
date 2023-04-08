import './Loading.css'

/* JS functions to show and hide the spinner */
export function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    const spinnerIcon = document.createElement('div');
    spinnerIcon.classList.add('spinner-icon');

    spinner.appendChild(spinnerIcon);
    document.body.appendChild(spinner);
}

export function hideLoadingSpinner() {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
        spinner.remove();
    }
}
