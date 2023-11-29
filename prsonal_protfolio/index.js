document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
        downloadPDF();
    });
});

function downloadPDF() {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfUrl = 'ShrutiSinha_updatedresume_compressed.pdf';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the PDF file's URL
    link.href = pdfUrl;

    // Specify the target for the link (use '_blank' to open in a new tab)
    link.target = '_blank';

    // Trigger a click event on the link to start the download
    link.click();
}
