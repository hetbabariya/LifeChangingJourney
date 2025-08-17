import os

# Path to your PDF directory
pdf_dir = r"D:\spiritual book pdf"
# Output text file
output_file = r"D:\spiritual_book_list.txt"

with open(output_file, "w", encoding="utf-8") as f:
    for root, dirs, files in os.walk(pdf_dir):
        for file in files:
            if file.lower().endswith(".pdf"):
                f.write(file + "\n")

print(f"PDF file names have been written to {output_file}")