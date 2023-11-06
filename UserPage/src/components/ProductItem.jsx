import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Box
            component="img"
            src={product.imageUrl}
            sx={{
              height: 300,
              width: 300,
            }}
          ></Box>
        </Box>
        <Typography align="center" gutterBottom variant="h2"></Typography>
        <Typography align="center" gutterBottom variant="h5">
          {product.name}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />

      <Typography align="center">
        <Link to={`/product/${product.id}/${product.productItems[0].id}`}>
          <button class="button-60" role="button">
            Detail
          </button>
        </Link>
        <Typography align="center" gutterBottom variant="h2"></Typography>
      </Typography>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
