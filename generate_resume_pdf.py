import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

def generate_resume(pdf_path):
    # Margins 0.45 inch for a clean 1-page fit
    margin = 32
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()
    
    # Custom colors
    COLOR_PRIMARY = HexColor("#0f172a") # Dark Slate / Black
    COLOR_MUTED = HexColor("#475569")
    COLOR_BORDER = HexColor("#cbd5e1")
    COLOR_ACCENT = HexColor("#1e293b")

    # Typography styles
    style_role = ParagraphStyle(
        'RoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=32,
        textColor=COLOR_PRIMARY
    )

    style_name = ParagraphStyle(
        'FullName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=COLOR_PRIMARY,
        spaceAfter=6
    )

    style_summary = ParagraphStyle(
        'Summary',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=COLOR_PRIMARY
    )

    style_section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=18,
        textColor=COLOR_PRIMARY,
        spaceBefore=0,
        spaceAfter=0
    )

    style_item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=COLOR_PRIMARY
    )

    style_item_meta = ParagraphStyle(
        'ItemMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_RIGHT,
        textColor=COLOR_MUTED
    )

    style_body = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_PRIMARY
    )

    style_body_muted = ParagraphStyle(
        'BodyTextMuted',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_MUTED
    )

    style_bullet = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=COLOR_PRIMARY,
        leftIndent=10,
        firstLineIndent=-10
    )

    story = []

    # Header
    story.append(Paragraph("Software Developer", style_role))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Pelagia Svare", style_name))
    story.append(Spacer(1, 4))
    summary_text = (
        "Software Developer skilled in JavaScript, Python and C#, building user-focused web and "
        "application solutions. Experienced Scratch educator and mentor, passionate about "
        "software development and delivering impactful digital products."
    )
    story.append(Paragraph(summary_text, style_summary))
    story.append(Spacer(1, 10))

    # Two-column layout width calculation
    # Page width = 8.5 * 72 = 612. Printable width = 612 - 2 * 32 = 548
    col1_width = 300
    gap = 20
    col2_width = 228

    # Left Column Content (Experience, Education)
    left_flowables = []
    
    # EXPERIENCE Heading & Underline
    left_flowables.append(Paragraph("Experience", style_section_heading))
    left_flowables.append(Spacer(1, 4))
    left_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=8))
    
    # 1. Software Developer
    exp1_header = Table([
        [Paragraph("<b>Software Developer</b>", style_item_title), Paragraph("Uncommon.org<br/>2026 - Present", style_item_meta)]
    ], colWidths=[175, 125])
    exp1_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(exp1_header)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Contributed to development tasks and supported ongoing projects while teaching coding to school students.", style_body))
    left_flowables.append(Spacer(1, 8))

    # 2. Scratch Coordinator
    exp2_header = Table([
        [Paragraph("<b>Scratch Coordinator</b>", style_item_title), Paragraph("Uncommon.org<br/>2026 - Present", style_item_meta)]
    ], colWidths=[175, 125])
    exp2_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(exp2_header)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.", style_body))
    left_flowables.append(Spacer(1, 8))

    # 3. Product Designer
    exp3_header = Table([
        [Paragraph("<b>Product Designer</b>", style_item_title), Paragraph("Uncommon.org<br/>2026", style_item_meta)]
    ], colWidths=[175, 125])
    exp3_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    left_flowables.append(exp3_header)
    left_flowables.append(Spacer(1, 2))
    left_flowables.append(Paragraph("Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features, and collaborated on development.", style_body))
    left_flowables.append(Spacer(1, 12))

    # EDUCATION Heading & Underline
    left_flowables.append(Paragraph("Education", style_section_heading))
    left_flowables.append(Spacer(1, 4))
    left_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=8))

    # 1. FreeCodeCamp 2026
    left_flowables.append(Paragraph("<b>FreeCodeCamp 2026</b>", style_item_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("Responsive Website Design Certification", style_body_muted))
    left_flowables.append(Spacer(1, 7))

    # 2. Uxcel 2026
    left_flowables.append(Paragraph("<b>Uxcel 2026</b>", style_item_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("UX/Product Design learning", style_body_muted))
    left_flowables.append(Spacer(1, 7))

    # 3. Uncommon.org 2026
    left_flowables.append(Paragraph("<b>Uncommon.org 2026</b>", style_item_title))
    left_flowables.append(Spacer(1, 1))
    left_flowables.append(Paragraph("Information Technology<br/>Software Development", style_body_muted))

    # Right Column Content (Contact, Profile Highlights, Core Skills, References)
    right_flowables = []

    # CONTACT Heading & Underline
    right_flowables.append(Paragraph("Contact", style_section_heading))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=6))
    contact_p = (
        "pelagiasvare2002@gmail.com<br/>"
        "+263 78 164 8526<br/>"
        "<b>Portfolio:</b><br/>"
        "pelagia-svare-software-developer.vercel.app"
    )
    right_flowables.append(Paragraph(contact_p, style_body))
    right_flowables.append(Spacer(1, 10))

    # PROFILE HIGHLIGHTS Heading & Underline
    right_flowables.append(Paragraph("Profile Highlights", style_section_heading))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=6))
    
    h1 = "• Built a home services platform connecting homeowners with trusted service providers during Product Design training. Conducted user research, created wireframes and prototypes, and designed user-friendly workflows."
    h2 = "• Built a responsive portfolio website during Software Development training, focusing on accessibility, responsive design and clean, user-friendly interfaces."
    
    right_flowables.append(Paragraph(h1, style_bullet))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(Paragraph(h2, style_bullet))
    right_flowables.append(Spacer(1, 10))

    # CORE SKILLS Heading & Underline
    right_flowables.append(Paragraph("Core Skills", style_section_heading))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=6))
    skills_text = (
        "C# • .NET • Entity Framework • JavaScript • TypeScript • Python • "
        "HTML • CSS • Node.js • React • Git • GitHub • IT Support • "
        "Scratch Programming • Vite • Styled Components , vercel, Prompt engineering"
    )
    right_flowables.append(Paragraph(skills_text, style_body))
    right_flowables.append(Spacer(1, 10))

    # REFERENCES Heading & Underline
    right_flowables.append(Paragraph("References", style_section_heading))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_PRIMARY, spaceBefore=1, spaceAfter=6))
    ref_text = (
        "<b>Tonderai Kawere</b> — Software Developer | 078 252 8050 | tonderai@uncommon.org"
    )
    right_flowables.append(Paragraph(ref_text, style_body))

    # Assemble into a 2-column Table
    main_table = Table([[left_flowables, right_flowables]], colWidths=[col1_width, col2_width])
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 10),
        ('LEFTPADDING', (1,0), (1,0), 10),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))

    story.append(main_table)

    doc.build(story)
    print(f"Successfully generated resume PDF at: {pdf_path}")

if __name__ == "__main__":
    target = r"C:\Users\eyami\.gemini\antigravity-ide\scratch\pelagia-svare-software-developer\public\resume.pdf"
    generate_resume(target)
