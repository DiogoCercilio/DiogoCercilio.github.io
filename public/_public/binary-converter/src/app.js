import './stylesheets/app.scss'
import Binary2Text2Binary from '@diogocercilio/binary-2-text-2-binary';

window.onload = function() {
    new Binary2Text2Binary({
        inputBin: '#input-bin',
        inputText: '#input-digit',
        copyButton: '.copy'
    });
};
