import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { destinatario, assunto, texto } = req.body;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const { height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText("OFÍCIO", { x: 250, y: height - 80, size: 20, font, color: rgb(0,0,0) });
  page.drawText(`Destinatário: ${destinatario}`, { x: 50, y: height - 140, size: 12, font });
  page.drawText(`Assunto: ${assunto}`, { x: 50, y: height - 160, size: 12, font });

  const textoFormatado = texto.match(/.{1,80}/g) || [];
  textoFormatado.forEach((line, i) => {
    page.drawText(line, { x: 50, y: height - 200 - i * 15, size: 12, font });
  });

  const pdfBytes = await pdfDoc.save();
  res.setHeader("Content-Type", "application/pdf");
  res.send(Buffer.from(pdfBytes));
}