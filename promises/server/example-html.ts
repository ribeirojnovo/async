export const exampleHtml = `
<!DOCTYPE html>

<head>
    <title>My Website</title>
    <style>
        *,
        html {
            margin: 0;
            padding: 0;
            border: 0;
        }

        html {
            width: 100%;
            height: 100%;
        }

        body {
            width: 100%;
            height: 100%;
            position: relative;
            background-color: rgb(236, 152, 42);
        }

        .center {
            width: 100%;
            height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
            margin: 0;
            color: white;
            font-family: "Trebuchet MS", Helvetica, sans-serif;
        }

        h1 {
            font-size: 144px;
        }

        p {
            font-size: 64px;
        }
    </style>
</head>

<body>
    <div class="center">
        <h1>Olá Carlinhos!</h1>
    </div>
</body>

</html>`;
