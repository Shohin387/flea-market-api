import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {

	getAllProducts(): Product[] {

		return ([
			{
        id: 1,
        userId: 1,
        nameProduct: "Брюки",
        imgSrc: "https://avatars.mds.yandex.net/i?id=c606f20bb2a72b3bbeb2f0a25605f40ba5eab465-8187788-images-thumbs&n=13",
        discription: "Lorem Text",
        price: 2000,
        adress: "Улица Пушкина, Дом Колотушкина",
        category: 'Одежда',
        coordinate: {lat: 9, lng: 8}
			},
			{
					id: 2,
					userId: 1,
					nameProduct: "Шотры",
					imgSrc: "https://avatars.mds.yandex.net/i?id=2df2d2cec8bc169d3c49327efc13f838fad7c54a-8497448-images-thumbs&n=13",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 800,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Одежда',
					coordinate: {lat: 9, lng: 8}

			},
			{
					id: 3,
					userId: 1,
					nameProduct: "Телефон",
					imgSrc: "https://avatars.mds.yandex.net/get-goods_pic/8139565/hat051fb5b8242ac81f83222f5f4f06118c/600x600",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 2800,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Цифровая техника',
					coordinate: {lat: 9, lng: 8}

			},
			{
					id: 4,
					userId: 1,
					nameProduct: "Рюкзак",
					imgSrc: "https://avatars.mds.yandex.net/i?id=f87e823c2f902671a530cc613457197d23183627-5221140-images-thumbs&n=13",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 1000,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Одежда',
					coordinate: {lat: 9, lng: 8}
			}, 
			{
					id: 5,
					userId: 1,
					nameProduct: "Игровая консоль",
					imgSrc: "https://avatars.mds.yandex.net/i?id=c0e7725d1aab1d568a757c3cffce0116fac3e688-4828150-images-thumbs&n=13",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 40000,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Цифровая техника',
					coordinate: {lat: 9, lng: 8}
			},
			{
					id: 6,
					userId: 1,
					nameProduct: "Игра",
					imgSrc: "https://avatars.mds.yandex.net/i?id=92a11a47b118def4151e7e856eb4c6ad447ed78b-10143023-images-thumbs&n=13",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 1000,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Цифровая техника',
					coordinate: {lat: 9, lng: 8}

			},
			{
					id: 7,
					userId: 1,
					nameProduct: "Компьютер",
					imgSrc: "https://avatars.mds.yandex.net/i?id=f100273e9cc22b5431fa65e6cf16e48639c3aca4-5178729-images-thumbs&n=13",
					discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ratione praesentium error nisi provident ut, quos earum architecto fugiat debitis nesciunt, ad porro. Perspiciatis, dolores, itaque repellat quibusdam exercitationem doloremque accusantium illo aliquid molestias quos blanditiis recusandae commodi quaerat deserunt! Voluptas fuga, veritatis assumenda quia amet quos voluptatum atque provident.",
					price: 130000,
					adress: "Улица Пушкина, Дом Колотушкина",
					category: 'Цифровая техника',
					coordinate: {lat: 9, lng: 8}

			},
		])
	}

}
