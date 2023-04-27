import { useTranslation } from 'react-i18next'
import './styles.css'

const br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2W70tTURjHz/9VkvmjVC5qQ2IlBPkDfKVvxNheBEpZL+pNBAVtgwRf6sTfA/EHm0gqiixY0WglWYa1XViRSfGV59Kt1HvvOXf3bDg5X3hgcMfd+Xy/z3meMaakpKSkpHQWpEWbUU7FFED0jCfQOtmIeKoKq68v4sZUY3kB3I/XQ/9YAeydMyr/6Twer9SdfoDWP66bBz9eMtNgsgGOu25XstJgsgB4rhcrDSYDwMr17NtLCD0Lor07gsv+MaM6usMIhYLGM1lpMC8Adq4vzLaj/loUF65MWRY9W4x1SEmDFQpg1+t0+ErfpO3hzaLvWEHkXabhGsCp13PvfAjeTeDWnTUEB9fR2ZuAr20OlT5riIbro8hlaj3dDVcAvAmzuTEPKx0c/MbLV1kMj6bR1bd8BCgcCniaVEIAohNm+UUaG8kvSKzuYn1rD6k3OrK5/RNA2x++4eGTJGqvzhgXGx4mFRdAdK5T1fmtL27zzTkEBtcwHnuPrP7zL8jO7nf0P1gRerddGlyAgaUGfN0RA3CaPGZVt0zj3qMtZLbzBsSP/V9C7yYTycyCWsg/0YSZZDX3R2jm8wDMqmqZxtOhFNKZz9z3UvtSG3u+xLw0aEmJApg19Py2a9c9jVGnNGjDirTRvzE6Aj1T49p1KYvMLg1aTqKLbCnWVpDrmgwApzQIgpaUk/NWh48Lui4NwCkN2rC0pDp7IsZ4paLPkXDgRNvoLl2XDuBmUslwXSsGAO9ueO11rVQAIml4dV0rNoBdGrJc10oF8P8fQZmua6UEKHYxBRA9ZQkoKSkpKSmxMtQhlLbo6Z/lAAQAAAAASUVORK5CYII"
const en = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg=="

const languageOptions = [
  {
    name: "BR",
    value: "ptBr",
    flag: br,
  },
  {
    name: "EUA",
    value: "en",
    flag: en,
  },
]
export const LanguageSwitcher = () => {
   const { t, i18n } = useTranslation()
  
   return (
    <div className="language-switcher">
      <span>{t("selectYourLanguage")}</span>
      {languageOptions.map(lang => (
        <button type="button" key={lang.value} onClick={() => {
          i18n.changeLanguage(lang.value)
        }}>
          <img src={lang.flag} alt={lang.name} />
          <span>{lang.name}</span>
        </button>
      ))}
    </div>    
    );
}