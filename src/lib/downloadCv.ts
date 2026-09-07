/**
 * Utility to trigger immediate, native browser download of the exact original CV PDF.
 * This prevents client-side routing interceptions or IDE/code viewer page openings.
 */
export async function downloadCv(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const fileName = "Pelagia Svare CV.pdf";
  const pdfUrl = "/Pelagia%20Svare%20CV.pdf";

  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${pdfUrl}: ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(
      new Blob([blob], { type: "application/pdf" })
    );

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up memory
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);
  } catch (err) {
    console.error("Direct blob download failed, falling back to direct link:", err);
    const fallbackLink = document.createElement("a");
    fallbackLink.href = pdfUrl;
    fallbackLink.download = fileName;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "noopener noreferrer";
    fallbackLink.style.display = "none";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
