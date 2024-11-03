import pertemuan1 from "@/public/gallery/pertemuan1.webp";
import pertemuan2 from "@/public/gallery/pertemuan2.webp";
import pertemuan3 from "@/public/gallery/pertemuan3.webp";
import menjalinhubungan1 from "@/public/gallery/menjalinhubungan1.webp";
import menjalinhubungan2 from "@/public/gallery/menjalinhubungan2.webp";
import menjalinhubungan3 from "@/public/gallery/menjalinhubungan3.webp";
import { StaticImageData } from "next/image";

export interface loveStoryProps{
    title: string;
    description: string;
    images?: StaticImageData[];
}

export const loveStoryData: loveStoryProps[] = [
    {
        title: "Pertemuan",
        description: "Pertemuan kami terjadi di tahun 2022 yang pada saat itu kami adalah teman satu kantor, setelah kami mengenal satu sama lain, kami berteman tetapi hanya sebatas rekan kerja pada umumnya.",
        images: [
            pertemuan1, pertemuan2, pertemuan3
        ]
    },
    {
        title: "Menjalin Hubungan",
        description: "Berawal dari kerapuhan dan butuhnya teman untuk saling menguatkan karena masa lalu yang kami alami, kami saling hadir untuk mendengarkan dan mendukung satu sama lain. Di saat itu, kami memutuskan untuk mencoba membuka lembaran baru dalam hidup masing-masing. Luka masa lalu memang tidak mudah sembuh, namun dengan tekad kuat untuk melangkah maju, kami menemukan harapan dalam hubungan ini. Bersama-sama, kami sudah menghadapi dan melewati suka dan duka dalam perjalanan kisah cinta ini, hal itu membuat kami semakin yakin dan mantap untuk melanjutkan niat baik kami ke jenjang yang lebih serius.",
        images: [
            menjalinhubungan1, menjalinhubungan2, menjalinhubungan3
        ]
    },
    {
        title: "Hari Pernikahan",
        description: "Setelah berdiskusi tentang masa depan hubungan kami sejak pertengahan tahun 2023, akhirnya pada 10 Agustus 2024, Galih meminang Irna dengan cara yang tak terduga karena kami sedang di Pasar Malam saat itu. Pada tanggal 5 Oktober, atas restu orang tua dan dihadiri orang terkasih, secara resmi Galih melamar Irna, dan InsyaAllah di tanggal 13 Desember 2024 nanti, menjadi tanggal yang kami pilih untuk melangsungkan pernikahan kami. Sudah waktunya kami membuka lembaran baru dan menciptakan kisah baru untuk kami dan anak kami, Sheena. Sejak sekarang dan sampai maut memisahkan nanti.",
    },
]