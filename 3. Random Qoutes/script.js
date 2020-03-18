var qoutes = [
'“Ketika kau bekerja keras dan gagal, penyesalan itu akan cepat berlalu. Berbeda dengan penyesalan ketika tidak berani mencoba.”',
'“Mula-mula, kau harus merubah dirimu sendiri, atau tidak akan ada yang berubah untukmu.”',
'“Sejujurnya, hanya ada sedikit arti di balik nama yang orang tuamu berikan. Apa yang lebih berarti adalah, yang orang tuamu lakukan di balik nama itu selama kehidupannya.”', 
'“Air mata adalah cara bagi hati untuk bicara, ketika bibir tak bisa mengungkapkan betapa kita merasakan sakit yang sangat.”', 
'“Jangan hanya berpikir tentang apa yang telah hilang darimu, kau takkan bisa mengambilnya kembali. Pikirkan apa yang masih kau miliki.”', 
'“Manusia adalah makhluk yang perkasa, karena kita memiliki kemampuan untuk merubah diri kita sendiri.”', 
'“Lebih baik dibenci karena menjadi dirimu sendiri, daripada dicintai karena menjadi orang lain.”', 
'“Jika aku mengabaikan temanku sementara aku punya kemampuan untuk menolongnya, apa itu berarti aku mengkhianatinya?”', 
'“Kau tahu apa yang paling jahat? menilai orang lain bahkan tanpa usaha untuk mengenalnya!”', 
'“Sudah merupakan tugas seorang pria untuk memberi maaf atas kebohongan wanita.”'];

function newQoute(){
	let randomNumber = Math.floor(Math.random() * (qoutes.length));
	document.getElementById('qouteDisplay').innerHTML = qoutes[randomNumber];
}



