import { Component } from "react";

class Product extends Component {

    state = {

        product: {

            Phone_Name: " Oneplus Nord "
            image: "data:image/webp;base64,UklGRjgHAABXRUJQVlA4ICwHAADQHQCdASpEAFoAPmEemEwkISQkEiCADAlkAK8/pkykq7mPvB4Pc9v/ekz/M7vrnTeiZ6l7+beoB+uXW8/bNRx+dn3ugPxlbYPAjZZ8AbViWj/OPPN/1fV40K6hv63/9DsFegp+1SHXEkG+GDBVy52rvisFGNAbu8YnPOGkbShDBa0EfpcDMoaw+oEc9D4d4BQqjNAVyAepl4a754IkokR25325SuwFY62P8x7BG4SUOXyZ/Lz4A2EseF/bQPHe1TGf4nYQlINOh8ruRmhGWROvFDSCPce4ZXiQBZClH6wOofJ/6lHnUPe29SOHk6QnbUbQAWpPiLRQAP792BM292y1wqJ08wDf4B24vMvsB5QJJC++6NUb5/qyf/LzLFK+DG6wb9bHDvqvNE3/jqmoDEBiYbp6u0SBBfFj6kFvH8cP/0fY2vZhztlNf/ivUUW9MFmNvH8o1Ci2wCD728Az6zDc6+SPBVEoEzX8D+f7+cIOW3MCsSTSXswv+U33bln3LQkYYlzt69g6mPKvq8ln5RlZSbfLDYMTKmoiOEsuf+76jR75sOjHD5wV9JRCqLmj8R6D8GvX7Z1hugA6Yr7zNRFDyY9Ey0L0PP1CLQPst4yUM76XYh4ZROxqun1clvaKg/5qvSXkE49yf8M7f8hWtztixEpXHiNbLb9rwWY2OElnuh56AT+E7FpqRiM8Y3r3m3gD+E4/N8J+Log8Ds9EsekTJ4Nb19h/vs+wFyzMdf6M0rZF5p6ZpbD8oZf0KoRi7eZmmmP0lQha2TX063SIVp3V19PRi8rkFSV8///KZqfr55p3yKwPyJ51HLV5v7w//IPNTq9F8mBPamGR69f97cYNXypXhXI38GFgmIdvFMtbksKZTr/McezDjmhfj8NURfTv/VNKXRs+fvu2qtZWkTSPQ6NZS7lMcjU57PL8fpk+yup+fHXVQn8VMv2TICZsaKnTiRoAZx3AhXYoraT2iQZIU8ZqWD/0Lu1xIPFKZXBp74MMPzXABdQr38hmWHz427pT4p8F16x8/dDkN68UTR7VS3yJcFWuYvmlAuyHkPAa/51yVxgo5LxHtQzK7Nq6X9+U/npIPMNFMkvNiFZcMKAqFibpHeeGjxURRuVbT/L4Z9Pbi2vHXpm5Te8I2RQREwWoYWmo8Lrcrq0QgrCk5kcM+BnGeExy8gU9LrnZppzjVu7xuaIOHsqXNeS24sxcIiGrQD2wv9IiyWd6rpX63HjV813wsVZA8AQf3QhdWCvzjm3A3rtFiv0yhZG8nguheMCbG4T35y6SObZaNhG7UXcq/7m+Fe5LSYKcDaJkX1261iXqHT7tHpGOr4PSMhuACjzd4rJ7tRM+ydz43tbCDRaA/+InZ/7YpazeLvf3yOx8KCbgzrmA9wFMtSBt/BgYzix4rE79cRVLACOEq1H/yrEzQFbk6s30Tgzt9JuRkNCnssgMxrLGmH1h9XBFXyFD1UXoAJC0AndUOe5nVZzk0ns5kT3ZO1WUEYCcD6kJBxy64EcRXzasHQUJfMTJiyLLPWcaFjIik2mldWidwp/iZUL6N0XWpGaVGnZBlexTO91cIZegdxpe/2P1RWp2ecN4KzLnL2AXRybgKjL+1UO9ffPf0XzjpZtIoYjtXinfocNSYAcu+NWI7pMnKH3NIVY0nXYjH6IzutLQyZ6hUiY42L+exQuGg5V4d+ZuMtuITG8UW0wMEPUojIUGRbhMcouDC0GR2Km70erJCZ3H2nRLE6+CsuZUxUDwbl01xNFA6EmXHqKcQRHLLzUW9IGWotqotIlGJZ8IDH9e660kzDtA9je/rS+YklqEU4ZOtYO+FEHhytT9zmTB17+D12zOHfGj+HizQ27N/KqzemqreCXvZ6ZIOnsiXRN4wIwhP1lp0rvTRPc3TPXAvLYtl/xAL1FLXWLIQSxb0QFBWp9duMTl6fIRy12H0Bf9jql2gn9MRUhNR0M+NPBWXEsqvJ7BKC4prefHe4TzgjARafJ5+0c/7D9j+v4f6xYVdu9WB7qFIN2Uwlwnov7k2twM3ihXa2XpGlvdTBo1vzB01PucQZQktNyfz1/MHXrrqdtG/gAkHWsy1Zqjbav2ZQiQh2VG4x2CRfdSpi0iHSevYYcO72+znuzhOowqLke8HauriSdjJ2OZMLZ890DYwL1fvkU7shQBut4+SDZtv3OxPLq5f+l7skWFeUbfvg7qNayL/b6mw9Mf1548IPBlpEFkbJe0+dAQFcGjOxwirntYb+ZC26VKorSCYtGrqMn0v914Ci48xFDUtmitZZ3LAD7f3SDXX0a/esU2a/RB9ADH/zT/+rnRL1fyTvj0g14NbcfFco+VRUfTKJhA1kQQ47PRoh9UoAMHK/xW/ybCjoe08+h+FmRE0797Ii/2JdEdA/f95cqK/rnRDuDuyMNthuGE5c1EexDLg85M/apyJRQGwodwAAA=",
            qty: 1,
            price: 14999
        }

    }

    render() {

        return (

            <div>

                <h1> Phone Name : {Phone_Name}</h1>
                <h1> Image : {image}</h1>
                <h1> Phone quantity : {qty}</h1>
                <h1> Phone price : {price}</h1>

            </div>

        )
    }
}

export default Product