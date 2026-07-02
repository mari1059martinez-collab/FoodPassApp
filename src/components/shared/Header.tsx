// src/components/shared/Header.tsx
<<<<<<< HEAD
import React, { useState } from 'react'; // <--- Agregado useState
=======
//
// Componente reutilizable para la barra superior de cada pantalla.
//
// En React Native, los componentes se crean como funciones (o clases, pero
// las funciones son la forma moderna). Un componente recibe "props" (propiedades)
// y retorna JSX (la sintaxis que parece HTML pero es JavaScript).
//
// Este componente reemplaza el <header> del diseño web, adaptado a móvil.
// En móvil no tiene la barra de búsqueda amplia del desktop — solo muestra
// el título, notificaciones y el avatar del usuario.

import React from 'react';
>>>>>>> origin/master
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
<<<<<<< HEAD
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../../theme/colors';
import NotificationModal from './feedback/NotificationModal'; // <--- Agregado el import

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  onSearchPress?: () => void;
}

export default function Header({ title, showSearch = false, onSearchPress }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false); // <--- Estado para el modal

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
=======
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, BorderRadius, Typography } from '../../theme/colors';

// Definimos qué props acepta este componente.
// TypeScript nos ayuda a saber exactamente qué le podemos pasar.
interface HeaderProps {
  title: string;                    // El título que aparece en el header
  showSearch?: boolean;             // ¿Mostrar ícono de búsqueda? (opcional, por defecto false)
  onSearchPress?: () => void;       // Función que se llama al tocar búsqueda
}

export default function Header({ title, showSearch = false, onSearchPress }: HeaderProps) {
  // useSafeAreaInsets nos da los márgenes necesarios para no invadir
  // el área del notch (iPhone) o la barra de estado (Android)
  const insets = useSafeAreaInsets();

  return (
    // El paddingTop dinámico es clave: se adapta a cada dispositivo automáticamente
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>

      {/* Nombre de la app */}
>>>>>>> origin/master
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>FoodPass</Text>
        <Text style={styles.subtitle}>{title}</Text>
      </View>

<<<<<<< HEAD
      <View style={styles.actions}>
        {showSearch && (
          <TouchableOpacity
=======
      {/* Acciones del lado derecho */}
      <View style={styles.actions}>

        {/* Botón de búsqueda (opcional) */}
        {showSearch && (
          <TouchableOpacity
            // TouchableOpacity es el componente de botón más común en RN.
            // Se vuelve semitransparente al presionarlo (feedback visual).
>>>>>>> origin/master
            style={styles.iconButton}
            onPress={onSearchPress}
            activeOpacity={0.7}
          >
            <MaterialIcons name="search" size={24} color={Colors.onBackground} />
          </TouchableOpacity>
        )}

<<<<<<< HEAD
        {/* Botón de notificaciones - Ahora funcional */}
        <TouchableOpacity 
          style={styles.iconButton} 
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)} // <--- Abre el modal
        >
          <View style={styles.notifWrapper}>
            <MaterialIcons name="notifications" size={24} color={Colors.onBackground} />
=======
        {/* Botón de notificaciones */}
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          {/* View relativa para posicionar el punto rojo encima del ícono */}
          <View style={styles.notifWrapper}>
            <MaterialIcons name="notifications" size={24} color={Colors.onBackground} />
            {/* El punto naranja que indica notificaciones pendientes */}
>>>>>>> origin/master
            <View style={styles.notifDot} />
          </View>
        </TouchableOpacity>

<<<<<<< HEAD
=======
        {/* Avatar del usuario */}
>>>>>>> origin/master
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MS</Text>
        </View>
      </View>
<<<<<<< HEAD

      {/* El Modal de Notificaciones */}
      <NotificationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
=======
>>>>>>> origin/master
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
=======
// StyleSheet.create() es la forma de definir estilos en React Native.
// Es similar a CSS pero son objetos JavaScript.
//
// Diferencias importantes con CSS:
// - No hay unidades (no se escribe "16px", solo 16)
// - Los nombres son camelCase (backgroundColor, no background-color)
// - No hay cascada ni herencia (cada componente tiene sus estilos)
// - flexDirection por defecto es 'column' (en web es 'row')
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',           // Los hijos van en fila (horizontal)
    alignItems: 'center',           // Centrados verticalmente
    justifyContent: 'space-between',// Espacio entre título y acciones
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fondo semitransparente (glassmorphism)
    // Sombra sutil (equivalente al backdrop-blur del diseño web)
>>>>>>> origin/master
    shadowColor: '#121f05',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
<<<<<<< HEAD
    elevation: 4,
  },
  titleContainer: {
    flex: 1,
  },
  appName: {
    ...Typography.titleLg,
    color: Colors.inverseSurface,
=======
    elevation: 4,                   // Android
  },
  titleContainer: {
    flex: 1,                        // Ocupa todo el espacio disponible
  },
  appName: {
    ...Typography.titleLg,
    color: Colors.inverseSurface,   // Verde oscuro
>>>>>>> origin/master
  },
  subtitle: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    gap: 8,
=======
    gap: 8,                         // Espacio entre los botones de acción
>>>>>>> origin/master
  },
  iconButton: {
    width: 40,
    height: 40,
<<<<<<< HEAD
    borderRadius: 20,
=======
    borderRadius: 20,               // Circular
>>>>>>> origin/master
    backgroundColor: Colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifWrapper: {
<<<<<<< HEAD
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
=======
    position: 'relative',           // Para posicionar el punto rojo relativamente
  },
  notifDot: {
    position: 'absolute',           // Se posiciona encima del ícono
>>>>>>> origin/master
    top: -2,
    right: -2,
    width: 8,
    height: 8,
<<<<<<< HEAD
    borderRadius: 4,
    backgroundColor: Colors.primaryContainer,
=======
    borderRadius: 4,                // Circular
    backgroundColor: Colors.primaryContainer, // Naranja
>>>>>>> origin/master
  },
  avatar: {
    width: 36,
    height: 36,
<<<<<<< HEAD
    borderRadius: 18,
    backgroundColor: Colors.inverseSurface,
=======
    borderRadius: 18,               // Circular
    backgroundColor: Colors.inverseSurface, // Verde oscuro
>>>>>>> origin/master
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/master
