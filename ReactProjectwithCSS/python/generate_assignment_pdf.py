# generate_assignment_pdf.py
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm

# --------- User-editable ----------
YOUR_NAME = "Hari ratan Yadav"   # <-- Replace this with your real name
OUTPUT_FILE = "Assignment_Submission_Final.pdf"
# ----------------------------------

PAGE_WIDTH, PAGE_HEIGHT = A4
LEFT_MARGIN = RIGHT_MARGIN = 20 * mm
TOP_MARGIN = BOTTOM_MARGIN = 20 * mm
usable_width = PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    name="TitleStyle",
    parent=styles["Heading1"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=22,
    alignment=1,  # center
    textColor=colors.HexColor("#2C3E50"),
    spaceAfter=12
)
section_heading = ParagraphStyle(
    name="SectionHeading",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=14,
    leading=18,
    textColor=colors.HexColor("#1ABC9C"),
    spaceBefore=12,
    spaceAfter=8
)
body_style = ParagraphStyle(
    name="BodyStyle",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=11,
    leading=16,
    textColor=colors.HexColor("#2C3E50"),
    spaceAfter=6
)

doc = SimpleDocTemplate(
    OUTPUT_FILE,
    pagesize=A4,
    leftMargin=LEFT_MARGIN,
    rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN,
    bottomMargin=BOTTOM_MARGIN
)

content = []

# Title and intro
content.append(Paragraph("Assignment Submission – Creative Thinking & Bug Spotting", title_style))
content.append(Spacer(1, 6))
content.append(Paragraph("Hi Amal,", body_style))
content.append(Paragraph("Thank you for shortlisting me for the next step. Please find my assignment submission below:", body_style))
content.append(Spacer(1, 12))

# Section 1: Creative Thinking
content.append(Paragraph("1. Creative Thinking", section_heading))

features = [
    ["Feature", "Description"],
    ["AI Interview Helper",
     "After auto-applying, the tool generates practice interview questions based on the job description. "
     "Users can record answers and get instant feedback and improvement tips, helping them prepare better and get more job offers."],
    ["Application Tracker with Insights",
     "A dashboard that shows all jobs applied, their status (pending, viewed, interview, rejected), "
     "and insights about which types of jobs get more responses. This helps users apply smarter and save time."],
    ["Premium Resume & Cover Letter Designs",
     "Professionally designed templates with keyword optimization, plus optional LinkedIn profile improvement "
     "or a small personal portfolio website to help users stand out to recruiters."]
]

# wrap each cell with Paragraph to ensure proper text wrapping
features_wrapped = []
for i, row in enumerate(features):
    left = Paragraph(f"<b>{row[0]}</b>", body_style)
    right = Paragraph(row[1], body_style) if i != 0 else Paragraph(f"<b>{row[1]}</b>", body_style)
    features_wrapped.append([left, right])

col0 = usable_width * 0.30
col1 = usable_width * 0.70
table = Table(features_wrapped, colWidths=[col0, col1], repeatRows=1)

table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#1ABC9C")),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, 0), 12),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#BDC3C7")),
    ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#7F8C8D")),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 10),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor("#FAFAFA")]),
]))
content.append(table)
content.append(Spacer(1, 18))

# Section 2: Spot the Bug
content.append(Paragraph("2. Spot the Bug", section_heading))
content.append(Paragraph("<b>Bug Found:</b> <font color='#E74C3C'>Failed to load resource: net::ERR_BLOCKED_BY_CLIENT</font> (from clarity.ms).", body_style))
content.append(Paragraph("<b>Reason & Fix:</b> This happens when an ad-blocker or browser privacy setting blocks Microsoft Clarity (analytics script). "
                         "The fix: whitelist clarity.ms or add graceful error handling when analytics scripts fail, so the extension still works.", body_style))
content.append(Spacer(1, 18))

# Closing and signature
content.append(Paragraph("Looking forward to discussing this in the interview.", body_style))
content.append(Spacer(1, 8))
content.append(Paragraph(f"<b>Best regards,</b><br/>{YOUR_NAME}", body_style))

# Build PDF
doc.build(content)
print(f"PDF generated: {OUTPUT_FILE}")
