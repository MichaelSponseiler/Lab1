# Lab1

## Aufgabenstellung
Die Aufgabe war ein ARM Template für eine Storage App und eine Web App zu erstellen.

## Durchführung
Beide wurden mit der Funktion im Azure Portal erstellt, mit der die Konfigurationen vorgenommen werden können und man im Anschluss das ARM Template und das parameter File exportieren kann. 
Im Nachfolgenden Schritt wurden beide Templates begutachtet und auf gemeinsamkeiten bzw unterschiede überprüft, um sie Fehlerlos zusammen zu füheren. 

## Parameter

Der Parameter "location" existiert in beiden Files und wird deshalb seperate hier erklärt.

| Parameter     | Beschreibung  |
| ------------- |:-------------:|
| location      | Gibt an wo der Dienst gehostet wird |

**Achtung:** Es wird in meinem Fall West Europa zweimal unterschiedlich geschrieben. Um Probleme zu vermeiden gibt es deswegen zwei Parameter. (locationStorageApp und locationWebapp) 

### Template

Im "resources" Abschnitt wird die Webapp und die Storage App dann mithilfe der Parameter richitg konfiguriert und erstellt.

| Parameter     | Beschreibung  |
| ------------- |:-------------:|
| schema      | Gibt die Adresse des JSON Files an das die Version des Templates spezifiziert |
| contentVersion      | Gibt die eigens festgelegte Versions Nummer an um signifikante Änderungen im Template auch mit einer neuen Versionsnummer zu versehen  |
| tags               | Kann frei bearbeitet werden. Hilfe zum Beispiel um Kostengruppen oder Arbeitsgruppen festzuhalten |

### Webapp

Hier sind die speziell für die Webapp benötigten Parameter erklärt. (Selbst erklärende parameter wurden großteils weggelassen)
 
| Parameter                    | Beschreibung  |
| -------------                |:-------------:|
| subscriptionId               | Meine subscription ID |
| name                         | Name der Web App |
| hostingPlanName              | App Service Plan |
| serverFarmResourceGroup      | Zugewiesene Resource Group |
| skuCode                      | F1 = Free Tier |
| workerSize                   | VM größe von Worker Pool Instanzen |
| workerSizeId                 | Referenzierung auf den Worker Pool |
| linuxFxVersion               | Linux Version |

### Storage App

Hier sind die speziell für die Storage App benötigten Parameter erklärt. (Selbst erklärende parameter wurden großteils weggelassen)

| Parameter                    | Beschreibung  |
| -------------                |:-------------:|
| accountType                  | Beeinflusst die Redundanz zum Schutz der Daten|
| kind                         | Ändert die Art des Lagers zur Optimierung je nach Vorhaben |
| accessTier                   | Hot oder Cold einstellbar je nach dem wie oft auf die Daten zugegriffen wird |
| allowBlobPublicAccess        | True or False, Beeinflusst ob man anonymen Öffentlichen Lese-Zugriff auf die Daten haben soll |
