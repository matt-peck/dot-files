{
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.10.0",
    "eslint-plugin-import": "^2.20.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.18.0",
    "eslint-plugin-react-hooks": "^1.7.0",
    "husky": "^4.2.1",
    "prettier": "^1.19.1",
    "pretty-quick": "^2.0.1",
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}
