import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import emp_prj from "../assets/emp_reg.png"
import quiz_prj from "../assets/quiz.png"
import weather_app_prj from "../assets/weather.png"
import cing_kitchen from "../assets/cing-kitchen.png"

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(400),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow:` 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
    },

    category: {
        color: theme.black,
        opacity: 1,
        fontWeight: 700,
        textTransform: 'uppercase',
        backgroundColor: '#c292ee',
        padding: '20px'
    },
    view: {
        marginLeft:'85%',
        textDecoration: 'none',
        boxShadow:'1px 1px 5px #000',
    },

}));

interface CardProps {
    image: string;
    link: string;
    category: string;
}

function Card({ image, link, category }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
            </div>
            <div className={classes.view} size="xs">
                <a href={link}>
                    <Button variant="white" color="dark">
                        View
                    </Button>
                </a>
            </div>

        </Paper>
    );
}

const data = [
    {
        image: emp_prj,
        category: 'Employee Registration System',
        link: 'https://github.com/HauSianCing/sample-project-laravel.git',
    },
    {
        image: quiz_prj,
        category: 'Quiz App',
        link: 'https://quiz-app-sample-hsc.vercel.app/',
    },
    {
        image: weather_app_prj,
        category: 'Weather App',
        link: 'https://weather-app-hsc.vercel.app/',
    },
    {
        image: cing_kitchen,
        category: `Cing's Kitchen`,
        link: 'https://cing-kitchen.vercel.app/',
    },
];

export function ProjectSlide() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}