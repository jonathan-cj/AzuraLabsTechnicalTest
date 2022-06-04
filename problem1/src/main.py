import csv, os, sys

def read_csv(filename):
  with open(filename, "r") as f:
    reader = csv.DictReader(f, delimiter=";")
    data = list(reader)
  return data

def write_csv(filename, data):
  with open(filename, "w") as f:
    writer = csv.DictWriter(f, delimiter=";", fieldnames=data[0].keys())
    writer.writeheader()
    writer.writerows(data)

def print_table(data):
  # get max length of each column
  nama_len = max(max(len(x["nama"]) for x in data), len("Nama"))
  harga_len = max(max(len(str(x["harga"])) for x in data), len("Harga"))
  rating_len = max(max(len(str(x["rating"])) for x in data), len("Rating"))
  likes_len = max(max(len(str(x["likes"])) for x in data), len("Likes"))

  # print header
  print("{:<{}} | {:<{}} | {:<{}} | {:<{}}".format(
    "Nama", nama_len,
    "Harga", harga_len,
    "Rating", rating_len,
    "Likes", likes_len,
  ))
  print("-" * (nama_len + harga_len + rating_len + likes_len + 8))

  # print data
  for x in data:
    print("{:<{}} | {:<{}} | {:<{}} | {:<{}}".format(
      x["nama"], nama_len,
      x["harga"], harga_len,
      x["rating"], rating_len,
      x["likes"], likes_len,
    ))

def sort_table(data):
  # Sort from lowest harga, highest rating, most likes
  data.sort(key=lambda x: (x["harga"], -float(x["rating"]), -float(x["likes"])))
  return data

if __name__ == "__main__":
  filename = input("Masukkan nama file CSV: ")

  if not filename.endswith(".csv"):
    filename += ".csv"

  filename = os.path.join("./test/", filename)

  # Check file exist
  if not os.path.isfile(filename):
    print("File tidak ditemukan")
    sys.exit(1)
  
  # Sort data and print it
  data = read_csv(filename)
  data = sort_table(data)
  print_table(data)

  # Write to file if needed
  new_filename = input("Masukkan nama file baru (jika tidak ingin menyimpan, tekan enter): ")
  if new_filename:
    if not new_filename.endswith(".csv"):
      new_filename += ".csv"
      
    new_filename = os.path.join("./test/", new_filename)
    write_csv(new_filename, data)
