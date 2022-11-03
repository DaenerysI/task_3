// Membuat Button Event
function tombol() {
    // Membuat teks kedalam id
    const judul = document.getElementById('judul');
    judul.innerHTML = 'CURRICULUM VITAE';

    const hubungi = document.getElementById('hubungi');
    hubungi.innerHTML = '<form action="#" method="get"> <div> <label for="nama">nama:</label> <input type="text" name="nama" id="nama" /> </div> <div> <p>sudah nonton video saya?</p> <input type="radio" name="sudah-nonton" id="sudah" /> <label for="sudah">sudah</label> <br /> <input type="radio" name="sudah-nonton" id="belum" /> <label for="belum">belum</label> </div> <br /> <div> <input type="checkbox" name="ini" id="ini" /> <label for="ini">ini</label><br /> <input type="checkbox" name="itu" id="itu" /> <label for="itu">itu</label><br /> <input type="checkbox" name="anu" id="anu" /> <label for="anu">anu</label> </div> <div> <button type="submit">Kirim</button> </div> </form>';
    
    // Memanipulasi Node
    const div = document.createElement('p'); 
    const teksDiv = document.createTextNode(' @mbfd01');
    div.appendChild(teksDiv); 
    const cetak = document.getElementById('body');
    cetak.appendChild(div);
}
