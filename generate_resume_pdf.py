import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import black, HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT

def generate_exact_resume(pdf_path):
    # Printable area: 8.5 x 11 inches = 612 x 792 pt
    margin_x = 36 # 0.5 inch margins
    margin_y = 36
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin_x,
        rightMargin=margin_x,
        topMargin=margin_y,
        bottomMargin=margin_y
    )

    styles = getSampleStyleSheet()

    # Colors
    TEXT_BLACK = black
    TEXT_MUTED = HexColor("#333333")

    # Typography styles matching the provided resume image
    style_main_role = ParagraphStyle(
        'MainRole',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=32,
        leading=36,
        textColor=TEXT_BLACK,
        spaceAfter=6
    )

    style_name = ParagraphStyle(
        'CandidateName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=TEXT_BLACK,
        spaceAfter=8
    )

    style_bio = ParagraphStyle(
        'BioText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=15,
        textColor=TEXT_BLACK,
        spaceAfter=14
    )

    style_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=TEXT_BLACK,
        spaceBefore=0,
        spaceAfter=2
    )

    style_exp_role = ParagraphStyle(
        'ExpRole',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=TEXT_BLACK
    )

    style_exp_company = ParagraphStyle(
        'ExpCompany',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12.5,
        alignment=TA_RIGHT,
        textColor=TEXT_BLACK
    )

    style_exp_body = ParagraphStyle(
        'ExpBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=TEXT_BLACK
    )

    style_edu_title = ParagraphStyle(
        'EduTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=TEXT_BLACK
    )

    style_edu_subtitle = ParagraphStyle(
        'EduSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=13.5,
        textColor=TEXT_BLACK
    )

    style_contact_text = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=TEXT_BLACK
    )

    style_bullet = ParagraphStyle(
        'HighlightBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=TEXT_BLACK,
        leftIndent=12,
        firstLineIndent=-12
    )

    style_skills = ParagraphStyle(
        'SkillsText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_BLACK
    )

    style_reference = ParagraphStyle(
        'ReferenceText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=TEXT_BLACK
    )

    story = []

    # 1. Main Header
    story.append(Paragraph("Software Developer", style_main_role))
    story.append(Paragraph("Pelagia Svare", style_name))
    bio_text = (
        "Software Developer skilled in JavaScript, Python and C#, building user-focused web and "
        "application solutions. Experienced Scratch educator and mentor, passionate about "
        "software development and delivering impactful digital products."
    )
    story.append(Paragraph(bio_text, style_bio))

    # Total width = 612 - 72 = 540 pt
    # Left column: ~310 pt, Right column: ~210 pt, Gap: 20 pt
    col1_w = 310
    col2_w = 210

    # ------------------ LEFT COLUMN ------------------
    left_flowables = []

    # Experience Section
    left_flowables.append(Paragraph("Experience", style_heading))
    left_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=8))

    # Job 1: Software Developer
    t1 = Table([
        [Paragraph("<b>Software Developer</b>", style_exp_role), Paragraph("Uncommon.org<br/>2026 - Present", style_exp_company)]
    ], colWidths=[180, 130])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(t1)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Contributed to development tasks and supported ongoing projects while teaching coding to school students.", style_exp_body))
    left_flowables.append(Spacer(1, 10))

    # Job 2: Scratch Coordinator
    t2 = Table([
        [Paragraph("<b>Scratch Coordinator</b>", style_exp_role), Paragraph("Uncommon.org<br/>2026 - Present", style_exp_company)]
    ], colWidths=[180, 130])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(t2)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.", style_exp_body))
    left_flowables.append(Spacer(1, 10))

    # Job 3: Product Designer
    t3 = Table([
        [Paragraph("<b>Product Designer</b>", style_exp_role), Paragraph("Uncommon.org<br/>2026", style_exp_company)]
    ], colWidths=[180, 130])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(t3)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features, and collaborated on development.", style_exp_body))
    left_flowables.append(Spacer(1, 14))

    # Education Section
    left_flowables.append(Paragraph("Education", style_heading))
    left_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=8))

    left_flowables.append(Paragraph("FreeCodeCamp 2026", style_edu_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("Responsive Website Design Certification", style_edu_subtitle))
    left_flowables.append(Spacer(1, 8))

    left_flowables.append(Paragraph("Uxcel 2026", style_edu_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("UX/Product Design learning", style_edu_subtitle))
    left_flowables.append(Spacer(1, 8))

    left_flowables.append(Paragraph("Uncommon.org 2026", style_edu_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("Information Technology<br/>Software Development", style_edu_subtitle))


    # ------------------ RIGHT COLUMN ------------------
    right_flowables = []

    # Contact Section
    right_flowables.append(Paragraph("Contact", style_heading))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=6))
    c_info = (
        "pelagiasvare2002@gmail.com<br/>"
        "+263 78 164 8526<br/>"
        "Portfolio:<br/>"
        "pelagia-svare-software-developer.vercel.app"
    )
    right_flowables.append(Paragraph(c_info, style_contact_text))
    right_flowables.append(Spacer(1, 10))

    # Profile Highlights Section
    right_flowables.append(Paragraph("Profile Highlights", style_heading))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=6))
    h1 = "• Built a home services platform connecting homeowners with trusted service providers during Product Design training. Conducted user research, created wireframes and prototypes, and designed user-friendly workflows."
    h2 = "• Built a responsive portfolio website during Software Development training, focusing on accessibility, responsive design and clean, user-friendly interfaces."
    right_flowables.append(Paragraph(h1, style_bullet))
    right_flowables.append(Spacer(1, 5))
    right_flowables.append(Paragraph(h2, style_bullet))
    right_flowables.append(Spacer(1, 10))

    # Core Skills Section
    right_flowables.append(Paragraph("Core Skills", style_heading))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=6))
    skills_content = (
        "C# • .NET • Entity Framework • JavaScript • TypeScript • Python • "
        "HTML • CSS • Node.js • React • Git • GitHub • IT Support • "
        "Scratch Programming • Vite • Styled Components , vercel, Prompt engineering"
    )
    right_flowables.append(Paragraph(skills_content, style_skills))
    right_flowables.append(Spacer(1, 10))

    # References Section
    right_flowables.append(Paragraph("References", style_heading))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=TEXT_BLACK, spaceBefore=2, spaceAfter=6))
    ref_content = (
        "Tonderai Kawere — Software Developer | 078 252 8050 | tonderai@uncommon.org"
    )
    right_flowables.append(Paragraph(ref_content, style_reference))


    # Assemble Two-Column Layout in Table
    body_table = Table([[left_flowables, right_flowables]], colWidths=[col1_w, col2_w])
    body_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 12),
        ('LEFTPADDING', (1,0), (1,0), 8),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))

    story.append(body_table)

    doc.build(story)
    print(f"Generated clean CV PDF at: {pdf_path}")

if __name__ == "__main__":
    base_dir = r"C:\Users\eyami\.gemini\antigravity-ide\scratch\pelagia-svare-software-developer\public"
    pdf1 = os.path.join(base_dir, "resume.pdf")
    pdf2 = os.path.join(base_dir, "Pelagia Svare Cv.pdf")
    generate_exact_resume(pdf1)
    generate_exact_resume(pdf2)
